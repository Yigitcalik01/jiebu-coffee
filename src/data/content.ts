export const IMAGES = {
  hero: 'https://images.pexels.com/photos/302898/pexels-photo-302898.jpeg?auto=compress&cs=tinysrgb&w=1920',
  brandIntro: 'https://images.pexels.com/photos/2174069/pexels-photo-2174069.jpeg?auto=compress&cs=tinysrgb&w=1200',
  experience: 'https://images.pexels.com/photos/16615302/pexels-photo-16615302.jpeg?auto=compress&cs=tinysrgb&w=1920',
  signatures: {
    tea: 'https://images.pexels.com/photos/33691833/pexels-photo-33691833.jpeg?auto=compress&cs=tinysrgb&w=900',
    icedLatte: 'https://images.pexels.com/photos/38519299/pexels-photo-38519299.jpeg?auto=compress&cs=tinysrgb&w=900',
    cheesecake: 'https://images.pexels.com/photos/28835210/pexels-photo-28835210.jpeg?auto=compress&cs=tinysrgb&w=900',
    bubbleTea: 'https://images.pexels.com/photos/11160112/pexels-photo-11160112.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  atmosphere: {
    interior: 'https://images.pexels.com/photos/30405795/pexels-photo-30405795.jpeg?auto=compress&cs=tinysrgb&w=1200',
    coffee: 'https://images.pexels.com/photos/5864226/pexels-photo-5864226.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dessert: 'https://images.pexels.com/photos/18897574/pexels-photo-18897574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    view: 'https://images.pexels.com/photos/36899275/pexels-photo-36899275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    customers: 'https://images.pexels.com/photos/6829469/pexels-photo-6829469.jpeg?auto=compress&cs=tinysrgb&w=1200',
    barista: 'https://images.pexels.com/photos/4349954/pexels-photo-4349954.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  gallery: [
    'https://images.pexels.com/photos/13305634/pexels-photo-13305634.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6205779/pexels-photo-6205779.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/37331036/pexels-photo-37331036.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/35819418/pexels-photo-35819418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/39016553/pexels-photo-39016553.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/531663/pexels-photo-531663.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/35028555/pexels-photo-35028555.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6412836/pexels-photo-6412836.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/29462802/pexels-photo-29462802.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
} as const;

export const SIGNATURES = [
  {
    name: 'Demleme Çay',
    enName: 'Brewed Tea',
    description: 'Geleneksel lezzeti modern bir atmosferde.',
    image: IMAGES.signatures.tea,
  },
  {
    name: 'Iced Latte',
    enName: 'Iced Latte',
    description: 'Serin, dengeli ve kahve odaklı.',
    image: IMAGES.signatures.icedLatte,
  },
  {
    name: 'San Sebastian Cheesecake',
    enName: 'San Sebastian Cheesecake',
    description: 'Yoğun ve kremamsı cheesecake deneyimi.',
    image: IMAGES.signatures.cheesecake,
  },
  {
    name: 'Bubble Tea',
    enName: 'Bubble Tea',
    description: 'Klasik kahve deneyiminin dışına çıkmak isteyenler için.',
    image: IMAGES.signatures.bubbleTea,
  },
] as const;

export const REVIEWS = [
  {
    text: 'Yıllardır zevkle keyifle gittiğim bir mekan... kesinlikle kahveleri çok güzel.',
    author: 'Google Kullanıcısı',
    rating: 5,
    role: 'Düzenli Müşteri',
  },
  {
    text: 'Atmosferi, konumu, manzarası çok güzel, keyifli bir yer.',
    author: 'Google Kullanıcısı',
    rating: 5,
    role: 'Ziyaretçi',
  },
  {
    text: 'Tatlıları ve kahveleri gerçekten başarılı. San Sebastian cheesecake mutlaka denenmeli.',
    author: 'Google Kullanıcısı',
    rating: 5,
    role: 'Tatlı Sever',
  },
  {
    text: 'Taşucu\'nda deniz kenarında böyle bir kafe olması büyük şans. Huzurlu ve lezzetli.',
    author: 'Google Kullanıcısı',
    rating: 4,
    role: 'Yerel',
  },
  {
    text: 'Bubble tea sevenler için güzel alternatifler var. Personel ilgili ve güler yüzlü.',
    author: 'Google Kullanıcısı',
    rating: 5,
    role: 'Bubble Tea Hayranı',
  },
  {
    text: 'Fiyatlar bölgeye göre biraz yüksek ama kalite ve ortam buna değer.',
    author: 'Google Kullanıcısı',
    rating: 4,
    role: 'Ziyaretçi',
  },
] as const;

export const MENU_DATA = {
  note: 'Fiyatlar ve mevsimsel lezzetler değişkenlik gösterebilir.',
  categories: [
    {
      title: 'Kahveler',
      items: [
        { name: 'Espresso', desc: 'Yoğun ve saf kahve özü.', price: '₺150' },
        { name: 'Americano', desc: 'Espresso ile sıcak suyun zarif buluşması.', price: '₺170' },
        { name: 'Cortado', desc: 'Espresso ve buharda sütünün dengeli uyumu.', price: '₺185' },
        { name: 'Flat White', desc: 'İpeksi mikro köpük ile pürüzsüz kahve.', price: '₺200' },
        { name: 'V60 Drip', desc: 'Tek köken çekirdekten elle demleme.', price: '₺220' },
      ],
    },
    {
      title: 'Soğuklar & Spesiyaller',
      items: [
        { name: 'Iced Latte', desc: 'Serin, dengeli ve kahve odaklı.', price: '₺210' },
        { name: 'Cold Brew', desc: '12 saat soğuk demleme, yumuşak ve derin.', price: '₺230' },
        { name: 'Çilekli Bubble Tea', desc: 'Taze çilek ve tapioka incileri.', price: '₺195' },
        { name: 'Hibiscus Tea', desc: 'Asidik ve çiçeksi notalarla soğuk demleme.', price: '₺175' },
      ],
    },
    {
      title: 'Tatlılar',
      items: [
        { name: 'San Sebastian Cheesecake', desc: 'Yoğun ve kremamsı cheesecake deneyimi.', price: '₺250' },
        { name: 'Kruvasan', desc: 'Kat kat tereyağı ile fırından yeni çıkmış.', price: '₺160' },
        { name: 'Brownie', desc: 'Çikolata dolu, dışı çıtır içi yumuşak.', price: '₺180' },
      ],
    },
  ],
} as const;

export const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Menü', href: '#menu' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Yorumlar', href: '#reviews' },
  { label: 'İletişim', href: '#location' },
] as const;

export const CONTACT = {
  addressLines: ['Taşucu, İsmet İnönü Cd. No: 3/I', '33960 Silifke / Mersin'],
  phone: '0545 129 55 81',
  phoneLink: '+905451295581',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=JIEBU+Coffee+Taşucu+İsmet+İnönü+Cd+No+3+Silifke+Mersin',
  embedUrl: 'https://www.google.com/maps?q=Taşucu+İsmet+İnönü+Cd+No+3+Silifke+Mersin&output=embed',
  instagram: 'https://instagram.com',
} as const;
