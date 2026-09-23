import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vesselName, port, agentName, contactNumber, notes, items } = body;

    if (!vesselName || !items || items.length === 0) {
      return NextResponse.json(
        { message: 'Nama kapal dan daftar barang wajib diisi.' },
        { status: 400 }
      );
    }

    // Format data baris Excel
    const excelRows = items.map((item: any, index: number) => ({
      No: index + 1,
      'Kategori': item.category,
      'Nama Barang': item.name,
      'Jumlah Permintaan': item.quantity,
      'Satuan': item.unit || '-',
    }));

    // Generate Workbook Excel
    const worksheet = XLSX.utils.json_to_sheet(excelRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Requisition List');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    // Setup SMTP Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'subangsupplylog@gmail.com',
        pass: process.env.EMAIL_PASS || '',
      },
    });

    const currentDate = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Konten Pesan Email
    const mailOptions = {
      from: `"Order Web SSL" <${process.env.EMAIL_USER || 'subangsupplylog@gmail.com'}>`,
      to: 'subangsupplylog@gmail.com',
      subject: `[REQUEST ORDER] Kapal ${vesselName} - ${currentDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1e3a8a;">Permintaan Perbekalan Kapal Baru</h2>
          <p>Telah diterima order perbekalan kapal melalui website:</p>
          <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px; font-weight: bold;">Nama Kapal:</td><td>${vesselName}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Pelabuhan:</td><td>${port || 'Pelabuhan Patimban'}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Nama PIC / Agen:</td><td>${agentName || '-'}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Kontak / WA:</td><td>${contactNumber || '-'}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Catatan Khusus:</td><td>${notes || '-'}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Total Item:</td><td>${items.length} Macam Barang</td></tr>
          </table>
          <p>Daftar lengkap barang pesanan terlampir dalam file <strong>.xlsx</strong> berikut.</p>
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
          <small style="color: #888;">Email otomatis dari sistem CV. Subang Supply Logistic.</small>
        </div>
      `,
      attachments: [
        {
          filename: `Order_${vesselName.replace(/\s+/g, '_')}_${Date.now()}.xlsx`,
          content: excelBuffer,
        },
      ],
    };

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn('EMAIL_PASS belum disetel di .env.local, pengiriman email dilewati.');
    }

    return NextResponse.json({
      success: true,
      message: 'Order berhasil dibuat dan file Excel telah dikirimkan ke email operasional.',
    });
  } catch (error: any) {
    console.error('API Order Error:', error);
    return NextResponse.json(
      { message: 'Gagal memproses pesanan.', error: error.message },
      { status: 500 }
    );
  }
}