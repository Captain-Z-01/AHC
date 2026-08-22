const currentYear=new Date().getFullYear();

window.SITE_CONFIG={
  logoUrl:'https://avatars.githubusercontent.com/u/308199074?v=4',
  themeKey:'Captain_Z-MD.theme',

  footerBrand:'CAPTAIN Z',
  footerTitle:'Account Help Center',
  footerDescription:'Pusat panduan pemulihan dan keamanan akun digital melalui prosedur resmi dan aman.',

  footerPrimary:`© ${currentYear} Captain Z Account Help Center`,
  footerSecondary:'All rights reserved.',

  footerLinks:[
    {label:'Beranda',href:'#home'},
    {label:'Semua Artikel',href:'#home'},
    {label:'Keamanan Akun',href:'#category=security'}
  ]
};