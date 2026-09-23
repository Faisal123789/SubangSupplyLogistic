export interface Product {
  id: string;
  name: string;
  nameEn: string;
  unit: string;
  unitEn: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  desc: string;
  descEn: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'makanan-kering',
    name: 'Makanan Kering',
    nameEn: 'Dry Provisions',
    icon: '🥫',
    desc: 'Beras, tepung, gula, mi instan, dan persediaan bahan pokok kapal.',
    descEn: 'Rice, flour, sugar, instant noodles, and essential vessel dry staples.',
  },
  {
    id: 'sayuran',
    name: 'Sayuran Segar',
    nameEn: 'Fresh Vegetables',
    icon: '🥬',
    desc: 'Sayuran daun segar, kentang, wortel, dan bawang langsung dari pasokan lokal.',
    descEn: 'Fresh leafy greens, potatoes, carrots, and onions from local fresh produce.',
  },
  {
    id: 'daging-ikan',
    name: 'Daging & Ikan Segar',
    nameEn: 'Fresh Meat & Seafood',
    icon: '🥩',
    desc: 'Daging sapi, ayam, dan ikan laut segar dengan penanganan rantai dingin.',
    descEn: 'Fresh beef, poultry, and premium seafood managed under cold-chain standards.',
  },
  {
    id: 'bumbu-masakan',
    name: 'Bumbu Masakan',
    nameEn: 'Spices & Seasoning',
    icon: '🧂',
    desc: 'Rempah-rempah, saus, kecap, garam, dan penyedap rasa lengkap.',
    descEn: 'Spices, sauces, soy sauce, culinary salt, and complete galley seasonings.',
  },
  {
    id: 'buah-buahan',
    name: 'Buah-buahan',
    nameEn: 'Fresh Fruits',
    icon: '🍎',
    desc: 'Apel, jeruk, pisang, semangka, dan buah segar bernutrisi tinggi untuk kru.',
    descEn: 'Apples, oranges, bananas, watermelons, and fresh fruits for crew nutrition.',
  },
  {
    id: 'minuman',
    name: 'Minuman',
    nameEn: 'Beverages',
    icon: '🧃',
    desc: 'Air mineral kemasan, minuman isotonik, kopi, teh, dan susu kental manis.',
    descEn: 'Bottled mineral water, isotonic drinks, coffee, tea, and condensed milk.',
  },
  {
    id: 'frozen-food',
    name: 'Frozen Food',
    nameEn: 'Frozen Foods',
    icon: '🧊',
    desc: 'Nugget, sosis, bakso, kentang beku, dan olahan makanan beku lainnya.',
    descEn: 'Nuggets, sausages, meatballs, french fries, and other frozen processed items.',
  },
  {
    id: 'supply-tambahan',
    name: 'Supply Tambahan',
    nameEn: 'General Consumables',
    icon: '📦',
    desc: 'Sabun cuci piring, detergen, tisu, plastik sampah, dan perlengkapan kebersihan.',
    descEn: 'Dish soap, laundry detergents, tissues, trash bags, and cleaning supplies.',
  },
  {
    id: 'peralatan-dapur',
    name: 'Peralatan Dapur',
    nameEn: 'Galley Equipment',
    icon: '🍳',
    desc: 'Wajan besar kapal, pisau koki, talenan, spatula, dan perlengkapan memasak galai.',
    descEn: 'Marine-grade woks, chef knives, cutting boards, spatulas, and galley utensils.',
  },
];

export const productsDatabase: Record<string, Product[]> = {
  'makanan-kering': [
    { id: 'mk-01', name: 'Beras Premium Ramos (25 kg)', nameEn: 'Premium Ramos Rice (25 kg)', unit: 'Karung', unitEn: 'Bag', image: '' },
    { id: 'mk-02', name: 'Tepung Terigu Serbaguna (1 kg)', nameEn: 'All-Purpose Wheat Flour (1 kg)', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'mk-03', name: 'Gula Pasir Putih (1 kg)', nameEn: 'Refined White Sugar (1 kg)', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'mk-04', name: 'Minyak Goreng Sawit (2 L)', nameEn: 'Palm Cooking Oil (2 L)', unit: 'Pouch', unitEn: 'Pouch', image: '' },
    { id: 'mk-05', name: 'Mi Instan Kaldu Ayam (1 Dus)', nameEn: 'Chicken Broth Instant Noodles (1 Box)', unit: 'Dus', unitEn: 'Box', image: '' },
  ],
  'sayuran': [
    { id: 'sy-01', name: 'Bawang Merah Super', nameEn: 'Premium Shallots', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'sy-02', name: 'Bawang Putih Kating', nameEn: 'Garlic Bulbs', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'sy-03', name: 'Kentang Dieng Segar', nameEn: 'Fresh Dieng Potatoes', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'sy-04', name: 'Wortel Brastagi', nameEn: 'Fresh Carrots', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'sy-05', name: 'Kubis / Kol Putih', nameEn: 'White Cabbage', unit: 'Kg', unitEn: 'Kg', image: '' },
  ],
  'daging-ikan': [
    { id: 'di-01', name: 'Daging Sapi Paha Belakang Segar', nameEn: 'Fresh Beef Topside', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'di-02', name: 'Ayam Broiler Karkas Bersih', nameEn: 'Whole Dressed Broiler Chicken', unit: 'Ekor', unitEn: 'Pcs', image: '' },
    { id: 'di-03', name: 'Ikan Tenggiri Segar Utuh', nameEn: 'Fresh Spanish Mackerel', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'di-04', name: 'Udang Vaname Laut', nameEn: 'Vannamei Shrimp', unit: 'Kg', unitEn: 'Kg', image: '' },
  ],
  'bumbu-masakan': [
    { id: 'bm-01', name: 'Garam Dapur Beryodium (500 gr)', nameEn: 'Iodized Table Salt (500 gr)', unit: 'Bks', unitEn: 'Pack', image: '' },
    { id: 'bm-02', name: 'Kecap Manis Botol (600 ml)', nameEn: 'Sweet Soy Sauce Bottle (600 ml)', unit: 'Btl', unitEn: 'Bottle', image: '' },
    { id: 'bm-03', name: 'Saus Sambal Ekstra Pedas (1 kg)', nameEn: 'Hot Chili Sauce (1 kg)', unit: 'Pouch', unitEn: 'Pouch', image: '' },
    { id: 'bm-04', name: 'Merica Bubuk Murni', nameEn: 'Pure Ground White Pepper', unit: 'Bks', unitEn: 'Pack', image: '' },
  ],
  'buah-buahan': [
    { id: 'bh-01', name: 'Pisang Cavendish Super', nameEn: 'Premium Cavendish Bananas', unit: 'Sisir', unitEn: 'Bunch', image: '' },
    { id: 'bh-02', name: 'Apel Fuji Manis', nameEn: 'Sweet Fuji Apples', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'bh-03', name: 'Jeruk Medan Manis', nameEn: 'Fresh Sweet Oranges', unit: 'Kg', unitEn: 'Kg', image: '' },
    { id: 'bh-04', name: 'Semangka Merah Tanpa Biji', nameEn: 'Seedless Red Watermelon', unit: 'Kg', unitEn: 'Kg', image: '' },
  ],
  'minuman': [
    { id: 'mn-01', name: 'Air Mineral Galon (19 L)', nameEn: 'Bottled Mineral Water Gallon (19 L)', unit: 'Galon', unitEn: 'Gallon', image: '' },
    { id: 'mn-02', name: 'Air Mineral Botol 600ml (1 Dus)', nameEn: 'Bottled Mineral Water 600ml (1 Box)', unit: 'Dus', unitEn: 'Box', image: '' },
    { id: 'mn-03', name: 'Kopi Bubuk Hitam Tradisional (500 gr)', nameEn: 'Traditional Ground Coffee (500 gr)', unit: 'Bks', unitEn: 'Pack', image: '' },
    { id: 'mn-04', name: 'Teh Celup Hitam (Isi 100)', nameEn: 'Black Tea Bags (100 bags)', unit: 'Kotak', unitEn: 'Box', image: '' },
  ],
  'frozen-food': [
    { id: 'ff-01', name: 'Sosis Sapi Cocktail (1 kg)', nameEn: 'Beef Cocktail Sausage (1 kg)', unit: 'Bks', unitEn: 'Pack', image: '' },
    { id: 'ff-02', name: 'Chicken Nugget Premium (1 kg)', nameEn: 'Premium Chicken Nuggets (1 kg)', unit: 'Bks', unitEn: 'Pack', image: '' },
    { id: 'ff-03', name: 'Bakso Sapi Urat Super (50 butir)', nameEn: 'Beef Meatballs (50 pcs)', unit: 'Bks', unitEn: 'Pack', image: '' },
    { id: 'ff-04', name: 'Kentang Goreng Beku Shoestring (2 kg)', nameEn: 'Frozen Shoestring French Fries (2 kg)', unit: 'Bks', unitEn: 'Pack', image: '' },
  ],
  'supply-tambahan': [
    { id: 'st-01', name: 'Sabun Cuci Piring Jerigen (5 L)', nameEn: 'Dishwashing Liquid Canister (5 L)', unit: 'Jerigen', unitEn: 'Canister', image: '' },
    { id: 'st-02', name: 'Deterjen Bubuk Cuci Pakaian (5 kg)', nameEn: 'Laundry Detergent Powder (5 kg)', unit: 'Karung', unitEn: 'Bag', image: '' },
    { id: 'st-03', name: 'Kantong Plastik Sampah Hitam Besar', nameEn: 'Heavy Duty Black Garbage Bags', unit: 'Pak', unitEn: 'Pack', image: '' },
    { id: 'st-04', name: 'Tisu Gulung Higienis (1 Pack/10 Roll)', nameEn: 'Toilet Tissue Rolls (1 Pack/10 Rolls)', unit: 'Pak', unitEn: 'Pack', image: '' },
  ],
  'peralatan-dapur': [
    { id: 'pd-01', name: 'Wajan Penggorengan Stainless Galai 40 cm', nameEn: 'Galley Stainless Steel Wok 40 cm', unit: 'Unit', unitEn: 'Unit', image: '' },
    { id: 'pd-02', name: 'Pisau Koki Stainless Steel 8 Inch', nameEn: 'Stainless Steel Chef Knife 8 Inch', unit: 'Unit', unitEn: 'Unit', image: '' },
    { id: 'pd-03', name: 'Talenan Plastik Tebal Food Grade', nameEn: 'Food-Grade Heavy Cutting Board', unit: 'Unit', unitEn: 'Unit', image: '' },
    { id: 'pd-04', name: 'Spatula Stainless Steel Panjang', nameEn: 'Long Stainless Steel Galley Spatula', unit: 'Unit', unitEn: 'Unit', image: '' },
  ],
};