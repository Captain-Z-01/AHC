const articles=window.HELP_ARTICLES||[];
const categories=[
  {
    name:'Akun Google',
    icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z" fill="currentColor"/></svg>',
    slug:'google'
  },
  {
    name:'Media Sosial',
    icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    slug:'social'
  },
  {
    name:'Akun Game',
    icon:'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M510.441 322.894L480.681 196.334C465.608 140.082 414.634 100.971 356.395 100.971H155.604C97.365 100.971 46.392 140.082 31.319 196.334L1.559 322.894C-6.059 359.197 14.899 395.418 50.185 406.895L51.925 407.453C84.583 418.085 120.213 404.383 137.354 374.622L163.248 336.333C169.75 325.045 181.786 318.083 194.798 318.083H317.204C330.216 318.083 342.252 325.045 348.753 336.333L374.647 374.622C391.789 404.383 427.425 418.085 460.083 407.453L461.815 406.895C497.101 395.418 518.059 359.197 510.441 322.894Z" fill="currentColor"/><path d="M191.046 238.081H149.357V279.777H113.062V238.081H71.373V201.802H113.062V160.122H149.357V201.802H191.046V238.081Z" fill="var(--icon-cutout,#fff)"/><circle cx="374.728" cy="174.284" r="22.848" fill="var(--icon-cutout,#fff)"/><circle cx="329.049" cy="219.945" r="22.856" fill="var(--icon-cutout,#fff)"/><circle cx="374.728" cy="265.64" r="22.848" fill="var(--icon-cutout,#fff)"/><circle cx="420.406" cy="219.945" r="22.856" fill="var(--icon-cutout,#fff)"/></svg>',
    slug:'game'
  },
  {
    name:'Keamanan Akun',
    icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L4.5 6V11.5C4.5 16.1 7.5 20 12 21C16.5 20 19.5 16.1 19.5 11.5V6L12 3Z" stroke="currentColor" stroke-width="1.8"/><path d="M9 12.5L11 14.5L15.5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    slug:'security'
  }
];
const state={
  route:location.hash||'#home',
  navOpen:new Set(),
  installPrompt:null
};
const searchAliases={
  hack:['diretas','dibajak','diambil alih','retas','hacked','hacking'],
  hacked:['diretas','dibajak','diambil alih','retas'],
  password:['kata sandi','pw','sandi'],
  pw:['password','kata sandi'],
  ig:['instagram'],
  fb:['facebook'],
  wa:['whatsapp'],
  ff:['free fire'],
  ml:['mobile legends'],
  pubg:['pubg mobile'],
  '2fa':['verifikasi 2 langkah','autentikasi dua faktor','two factor authentication'],
  otp:['kode verifikasi','kode sekali pakai'],
  login:['masuk','akses akun'],
  recovery:['pemulihan','pulihkan'],
  email:['alamat email'],
  nomor:['nomor telepon','nomor pemulihan'],
  security:['keamanan','amankan'],
  secure:['keamanan','amankan'],
  phishing:['penipuan','link palsu'],
  device:['perangkat'],
  session:['sesi']
};
const categoryMatch={
  'Akun Google':'google','Media Sosial':'social','Akun Game':'game','Keamanan Akun':'security'
};
const categoryDescriptions={
  'Akun Google':'Pemulihan, login, perangkat, verifikasi, dan penguatan keamanan akun Google.',
  'Media Sosial':'Panduan pemulihan dan keamanan untuk Instagram, TikTok, WhatsApp, Discord, Facebook, X, Telegram, dan Snapchat.',
  'Akun Game':'Pemulihan dan keamanan akun game populer melalui jalur dukungan resmi.',
  'Keamanan Akun':'Dasar-dasar password, 2FA, passkey, phishing, perangkat, session, dan checklist keamanan.'
};
const siteConfig=window.SITE_CONFIG||{};
const logo=document.getElementById('siteLogo');
if(logo&&siteConfig.logoUrl)logo.src=siteConfig.logoUrl;
const appView=document.getElementById('appView');
const sidebar=document.getElementById('sidebar');
const overlay=document.getElementById('mobileOverlay');
const sidebarNav=document.getElementById('sidebarNav');
const searchPanel=document.getElementById('searchPanel');
const searchResults=document.getElementById('searchResults');
const searchTitle=document.getElementById('searchTitle');
const sidebarSearch=document.getElementById('sidebarSearch');
const installBtn=document.getElementById('installBtn');

const SMART_OFFICIAL_ALIASES = {
  "google": "google",
  "gmail": "google",
  "akun google": "google",
  "instagram": "instagram",
  "ig": "instagram",
  "tiktok": "tiktok",
  "tik tok": "tiktok",
  "discord": "discord",
  "whatsapp": "whatsapp",
  "wa": "whatsapp",
  "facebook": "facebook",
  "fb": "facebook",
  "telegram": "telegram",
  "free fire": "freefire",
  "garena": "freefire",
  "mobile legends": "mobilelegends",
  "ml": "mobilelegends",
  "pubg": "pubg",
  "roblox": "roblox",
  "minecraft": "minecraft",
  "genshin": "genshin"
};
const OFFICIAL_LINKS = {
  google: {
    "2FA": "https://support.google.com/accounts/answer/185839",
    "2-step verification": "https://support.google.com/accounts/answer/185839",
    "verifikasi dua langkah": "https://support.google.com/accounts/answer/185839",
    "autentikasi dua faktor": "https://support.google.com/accounts/answer/185839",

    "MFA": "https://support.google.com/accounts/answer/185839",
    "OTP": "https://support.google.com/accounts/answer/185839",
    "verification code": "https://support.google.com/accounts/answer/185839",
    "kode verifikasi": "https://support.google.com/accounts/answer/185839",

    "Google Prompt": "https://support.google.com/accounts/answer/7026266",
    "Google prompt": "https://support.google.com/accounts/answer/7026266",
    "prompt": "https://support.google.com/accounts/answer/7026266",

    "passkey": "https://support.google.com/accounts/answer/13548313",
    "security key": "https://support.google.com/accounts/answer/6103523",
    "kunci keamanan": "https://support.google.com/accounts/answer/6103523",

    "password": "https://myaccount.google.com/security",
    "kata sandi": "https://myaccount.google.com/security",
    "sandi": "https://myaccount.google.com/security",

    "backup code": "https://support.google.com/accounts/answer/1187538",
    "backup codes": "https://support.google.com/accounts/answer/1187538",
    "kode cadangan": "https://support.google.com/accounts/answer/1187538",

    "recovery": "https://support.google.com/accounts/answer/7682439",
    "account recovery": "https://support.google.com/accounts/answer/7682439",
    "pemulihan akun": "https://support.google.com/accounts/answer/7682439",

    "recovery email": "https://support.google.com/accounts/",
    "email pemulihan": "https://support.google.com/accounts/",

    "recovery phone": "https://support.google.com/accounts/",
    "nomor pemulihan": "https://support.google.com/accounts/",

    "security checkup": "https://myaccount.google.com/security-checkup",
    "Security Checkup": "https://myaccount.google.com/security-checkup",

    "security settings": "https://myaccount.google.com/security",
    "pengaturan keamanan": "https://myaccount.google.com/security",

    "devices": "https://myaccount.google.com/device-activity",
    "perangkat": "https://myaccount.google.com/device-activity",

    "security activity": "https://myaccount.google.com/notifications",
    "aktivitas keamanan": "https://myaccount.google.com/notifications",

    "third-party apps": "https://myaccount.google.com/connections",
    "aplikasi pihak ketiga": "https://myaccount.google.com/connections",

    "phishing": "https://support.google.com/accounts/answer/7507744",
    "link phishing": "https://support.google.com/accounts/answer/7507744",

    "suspicious activity": "https://support.google.com/accounts/answer/140921",
    "aktivitas mencurigakan": "https://support.google.com/accounts/answer/140921"
  },

  tiktok: {
    "2FA": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "2-step verification": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "MFA": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",

    "password": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "kata sandi": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",

    "OTP": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "verification code": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "kode verifikasi": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",

    "passkey": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",

    "recovery": "https://support.tiktok.com/en/log-in-troubleshoot/log-in/recover-an-account",
    "pemulihan akun": "https://support.tiktok.com/en/log-in-troubleshoot/log-in/recover-an-account",

    "phishing": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/avoid-fraudulent-message-attacks-on-tiktok",

    "suspicious activity": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety",
    "perangkat": "https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety"
  },

  instagram: {
    "2FA": "https://help.instagram.com/",
    "MFA": "https://help.instagram.com/",

    "password": "https://help.instagram.com/",
    "kata sandi": "https://help.instagram.com/",

    "OTP": "https://help.instagram.com/",
    "verification code": "https://help.instagram.com/",
    "kode verifikasi": "https://help.instagram.com/",

    "recovery": "https://www.instagram.com/hacked/",
    "account recovery": "https://www.instagram.com/hacked/",
    "pemulihan akun": "https://www.instagram.com/hacked/",

    "phishing": "https://help.instagram.com/",
    "link phishing": "https://help.instagram.com/",

    "suspicious activity": "https://help.instagram.com/",
    "aktivitas mencurigakan": "https://help.instagram.com/",

    "login": "https://help.instagram.com/",
    "session": "https://help.instagram.com/",
    "device": "https://help.instagram.com/"
  },

  discord: {
    "2FA": "https://support.discord.com/hc/en-us",
    "MFA": "https://support.discord.com/hc/en-us",

    "password": "https://support.discord.com/hc/en-us",
    "kata sandi": "https://support.discord.com/hc/en-us",

    "OTP": "https://support.discord.com/hc/en-us",
    "verification code": "https://support.discord.com/hc/en-us",
    "kode verifikasi": "https://support.discord.com/hc/en-us",

    "backup code": "https://support.discord.com/hc/en-us",
    "backup codes": "https://support.discord.com/hc/en-us",
    "kode cadangan": "https://support.discord.com/hc/en-us",

    "authenticator": "https://support.discord.com/hc/en-us",
    "authenticator app": "https://support.discord.com/hc/en-us",

    "account hacked": "https://support.discord.com/hc/en-us",
    "akun diretas": "https://support.discord.com/hc/en-us"
  },

  whatsapp: {
    "2FA": "https://faq.whatsapp.com/",
    "two-step verification": "https://faq.whatsapp.com/",
    "verifikasi dua langkah": "https://faq.whatsapp.com/",

    "PIN": "https://faq.whatsapp.com/",
    "OTP": "https://faq.whatsapp.com/",

    "verification code": "https://faq.whatsapp.com/",
    "kode verifikasi": "https://faq.whatsapp.com/",
    "registration code": "https://faq.whatsapp.com/",

    "recovery": "https://faq.whatsapp.com/",
    "pemulihan akun": "https://faq.whatsapp.com/",

    "account hacked": "https://faq.whatsapp.com/",
    "akun diretas": "https://faq.whatsapp.com/"
  },

  facebook: {
    "2FA": "https://www.facebook.com/help/",
    "MFA": "https://www.facebook.com/help/",

    "password": "https://www.facebook.com/help/",
    "kata sandi": "https://www.facebook.com/help/",

    "OTP": "https://www.facebook.com/help/",
    "verification code": "https://www.facebook.com/help/",
    "kode verifikasi": "https://www.facebook.com/help/",

    "recovery": "https://www.facebook.com/hacked/",
    "account recovery": "https://www.facebook.com/hacked/",
    "pemulihan akun": "https://www.facebook.com/hacked/",

    "phishing": "https://www.facebook.com/help/",
    "link phishing": "https://www.facebook.com/help/",

    "suspicious activity": "https://www.facebook.com/help/",
    "aktivitas mencurigakan": "https://www.facebook.com/help/"
  },

  telegram: {
    "2FA": "https://telegram.org/faq#q-what-is-two-step-verification",
    "two-step verification": "https://telegram.org/faq#q-what-is-two-step-verification",
    "verifikasi dua langkah": "https://telegram.org/faq#q-what-is-two-step-verification",

    "password": "https://telegram.org/faq#q-what-is-two-step-verification",
    "kata sandi": "https://telegram.org/faq#q-what-is-two-step-verification",

    "OTP": "https://telegram.org/faq",
    "verification code": "https://telegram.org/faq",
    "kode verifikasi": "https://telegram.org/faq",

    "login code": "https://telegram.org/faq",
    "kode login": "https://telegram.org/faq",

    "recovery": "https://telegram.org/faq",
    "pemulihan akun": "https://telegram.org/faq"
  }
};
function getSmartOfficialPlatform(article, container) {
  const value = [
    article?.title || "",
    article?.description || "",
    article?.category || "",
    ...(article?.tags || []),
    container?.textContent || ""
  ].join(" ").toLowerCase();

  const matches = [];

  for (const [name, platform] of Object.entries(SMART_OFFICIAL_ALIASES)) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    if (new RegExp(`\\b${escaped}\\b`, "i").test(value)) {
      matches.push({
        platform,
        length: name.length
      });
    }
  }

  matches.sort((a, b) => b.length - a.length);

  return matches[0]?.platform || null;
}
function activateSmartOfficialLinks(article) {
  const container = document.querySelector(".article-content");

  if (!container || !article) return;

  const platform = getSmartOfficialPlatform(article, container);

  const links = platform
    ? OFFICIAL_LINKS[platform] || {}
    : {};

  if (!Object.keys(links).length) return;

  const terms = Object.keys(links).sort(
    (a, b) => b.length - a.length
  );

  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (
          !parent ||
          ["A", "SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"].includes(
            parent.tagName
          )
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  let node;

  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  textNodes.forEach(textNode => {
    const text = textNode.nodeValue;
    const lower = text.toLowerCase();

    let position = 0;
    let changed = false;

    const fragment = document.createDocumentFragment();

    while (position < text.length) {
      let foundTerm = null;
      let foundIndex = Infinity;

      for (const term of terms) {
        const index = lower.indexOf(
          term.toLowerCase(),
          position
        );

        if (index !== -1 && index < foundIndex) {
          foundTerm = term;
          foundIndex = index;
        }
      }

      if (!foundTerm) {
        fragment.appendChild(
          document.createTextNode(text.slice(position))
        );
        break;
      }

      if (foundIndex > position) {
        fragment.appendChild(
          document.createTextNode(
            text.slice(position, foundIndex)
          )
        );
      }

      const link = document.createElement("a");

      link.href = links[foundTerm];
      link.textContent = text.slice(
        foundIndex,
        foundIndex + foundTerm.length
      );
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "official-link";
      link.title = "Buka sumber resmi";

      fragment.appendChild(link);

      position = foundIndex + foundTerm.length;
      changed = true;
    }

    if (changed) {
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  });
}
function detectPlatform(article, container) {
  const text = [
    article?.title || "",
    article?.description || "",
    article?.category || "",
    ...(article?.tags || []),
    container?.textContent || ""
  ].join(" ").toLowerCase();

  if (/\bgoogle\b|\bgmail\b/.test(text)) return "google";
  if (/\binstagram\b|\big\b/.test(text)) return "instagram";
  if (/\btiktok\b|\btik tok\b/.test(text)) return "tiktok";
  if (/\bdiscord\b/.test(text)) return "discord";
  if (/\bwhatsapp\b|\bwa\b/.test(text)) return "whatsapp";
  if (/\bfacebook\b|\bfb\b/.test(text)) return "facebook";
  if (/\btelegram\b/.test(text)) return "telegram";

  return null;
}
function saveTheme(){const theme=localStorage.getItem((window.SITE_CONFIG&&window.SITE_CONFIG.themeKey)||'Captain-z-MD.theme');document.body.classList.toggle('theme-dark',theme==='dark'||theme==='black');document.getElementById('themeIndicator').textContent=theme?`Tema: ${theme}`:'Tema otomatis';}
function renderNav(){
  sidebarNav.innerHTML=categories.map(cat=>{const items=articles.filter(a=>categoryMatch[a.category]===cat.slug);const open=state.navOpen.has(cat.slug);return `<div class="nav-category ${open?'open':''}"><button class="nav-cat-btn" data-toggle-cat="${cat.slug}"><span class="nav-cat-left"><span class="nav-icon">${cat.icon}</span><span>${cat.name}</span></span><span class="nav-chevron">›</span></button><div class="nav-links">${items.map(a=>`<a class="nav-link ${location.hash.includes(a.slug)?'active':''}" href="#${a.slug}" data-route="article" data-slug="${a.slug}">${a.title}</a>`).join('')}</div></div>`}).join('');
}
function scrollTop(){window.scrollTo({top:0,behavior:'smooth'})}
function closeSidebar(){sidebar.classList.remove('open');overlay.classList.remove('show')}
function openSidebar(){sidebar.classList.add('open');overlay.classList.add('show')}
function getCategoryIcon(category){
  const icons = {
    'Akun Google': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z" fill="currentColor"/></svg>',

    'Media Sosial':'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',

    'Akun Game':'<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M510.441 322.894L480.681 196.334C465.608 140.082 414.634 100.971 356.395 100.971H155.604C97.365 100.971 46.392 140.082 31.319 196.334L1.559 322.894C-6.059 359.197 14.899 395.418 50.185 406.895L51.925 407.453C84.583 418.085 120.213 404.383 137.354 374.622L163.248 336.333C169.75 325.045 181.786 318.083 194.798 318.083H317.204C330.216 318.083 342.252 325.045 348.753 336.333L374.647 374.622C391.789 404.383 427.425 418.085 460.083 407.453L461.815 406.895C497.101 395.418 518.059 359.197 510.441 322.894Z" fill="currentColor"/><path d="M191.046 238.081H149.357V279.777H113.062V238.081H71.373V201.802H113.062V160.122H149.357V201.802H191.046V238.081Z" fill="white"/><circle cx="374.728" cy="174.284" r="22.848" fill="white"/><circle cx="329.049" cy="219.945" r="22.856" fill="white"/><circle cx="374.728" cy="265.64" r="22.848" fill="white"/><circle cx="420.406" cy="219.945" r="22.856" fill="white"/></svg>',

    'Keamanan Akun':'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L4.5 6V11.5C4.5 16.1 7.5 20 12 21C16.5 20 19.5 16.1 19.5 11.5V6L12 3Z" stroke="currentColor" stroke-width="1.8"/><path d="M9 12.5L11 14.5L15.5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  return icons[category] || '';
}
function renderHome(){
  const tpl=document.getElementById('homeTemplate');appView.innerHTML=tpl.innerHTML;
  appView.insertAdjacentHTML('beforeend',renderFooter());
  document.getElementById('quickCards').innerHTML = [
  articles.find(a => a.slug === 'google-hacked'),
  articles.find(a => a.slug === 'instagram-hacked'),
  articles.find(a => a.slug === 'free-fire-hacked'),
  articles.find(a => a.slug === 'security-checklist')
].map(a => `
  <a class="quick-card" href="#${a.slug}">
    <div class="quick-card-title">
      <span class="quick-card-icon">
        ${getCategoryIcon(a.category)}
      </span>
      <h3>${a.title}</h3>
    </div>

    <p>${a.description}</p>
  </a>
`).join('');
  document.getElementById('categoryCards').innerHTML=categories.map(c=>`<a class="category-card" href="#category=${c.slug}"><div class="category-card-icon">${c.icon}</div><div><h3>${c.name}</h3><p>${categoryDescriptions[c.name]}</p><span class="result-count">${articles.filter(a=>categoryMatch[a.category]===c.slug).length} artikel</span></div></a>`).join('');
  document.getElementById('articleCount').textContent=`${articles.length} artikel siap dibaca`;
  document.getElementById('heroSearch').addEventListener('input',e=>runSearch(e.target.value));
  document.getElementById('heroSearch').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch(e.target.value)});
  scrollTop();
}
function categoryPage(slug){
  const cat=categories.find(c=>c.slug===slug);if(!cat){renderHome();return}
  const list=articles.filter(a=>categoryMatch[a.category]===slug);
  appView.innerHTML=`<section class="article-header"><div class="breadcrumb"><a href="#home">Beranda</a><span>›</span><span>${cat.name}</span></div><span class="eyebrow">KATEGORI</span><h1 class="article-title">${cat.name}</h1><p class="article-desc">${categoryDescriptions[cat.name]}</p></section><section class="related-grid">${list.map(a=>`<a class="related-card" href="#${a.slug}"><strong>${a.title}</strong><span>${a.description}</span></a>`).join('')}</section><footer class="footer"><span>${siteConfig.footerPrimary||'Powered by Captain_Z-MD'}</span><span>${siteConfig.footerSecondary||'Copying Captain Z'}</span></footer>`;
  scrollTop();
}
function slugify(text){return text.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')}
function formatSection(s,index){let html=`<h2 id="section-${index}">${s.heading}</h2>`;if(s.text)html+=`<p>${s.text}</p>`;if(s.items)html+=`<ul>${s.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;return html}
function articlePage(slug){
  const a=articles.find(x=>x.slug===slug);
  if(!a){notFound();return}

  const index=articles.findIndex(x=>x.slug===slug);
  const prev=articles[(index-1+articles.length)%articles.length];
  const next=articles[(index+1)%articles.length];
  const related=articles.filter(x=>x.category===a.category&&x.slug!==a.slug).slice(0,3);

  appView.innerHTML=`
    <article>
      <header class="article-header">
        <div class="breadcrumb">
          <a href="#home">Beranda</a>
          <span>›</span>
          <a href="#category=${categoryMatch[a.category]}">${a.category}</a>
          <span>›</span>
          <span>${a.title}</span>
        </div>

        <div class="article-head-grid">
          <div>
            <span class="eyebrow">${a.category.toUpperCase()}</span>
            <h1 class="article-title">${a.title}</h1>
            <p class="article-desc">${a.description}</p>

            <div class="article-tags">
              ${a.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
            </div>
          </div>

          <figure class="article-hero">
            <img src="${a.image}" alt="Ilustrasi untuk ${a.title}" loading="lazy">
            <figcaption class="result-count">
              Ilustrasi pendukung · bukan tangkapan layar resmi layanan.
            </figcaption>
          </figure>
        </div>
      </header>

      <div class="article-layout">

        <div class="article-main">

          <div class="article-content">
            ${a.sections.map(formatSection).join('')}

            <div class="callout">
              <strong>Catatan penting.</strong>
              Panduan ini ditujukan untuk memulihkan dan mengamankan akun milik Anda sendiri.
              Jangan mencoba bypass, mengambil alih, atau mengakali sistem keamanan.
            </div>

            <div class="article-feedback">
              <h3>
                Apakah artikel [ <span class="feedback-title">${a.title}</span> ] membantu?
              </h3>

              <p>
                Berikan penilaian untuk membantu kami memperbaiki panduan.
              </p>

              <div class="feedback-buttons">
                <a href="https://forms.gle/xEDWX3d9S2wvJVPM7"
                   target="_blank"
                   rel="noopener noreferrer">
                  <span>👍</span>
                  <span>Ya, membantu</span>
                </a>

                <a href="https://forms.gle/xEDWX3d9S2wvJVPM7"
                   target="_blank"
                   rel="noopener noreferrer">
                  <span>👎</span>
                  <span>Tidak membantu</span>
                </a>
              </div>
            </div>

            <div class="article-official">
              <a class="primary-btn"
                 href="${a.official}"
                 target="_blank"
                 rel="noopener noreferrer">
                ${a.officialLabel} ↗
              </a>

              <a class="secondary-btn" href="#home">
                Kembali ke semua artikel
              </a>
            </div>
          </div>

          <section class="related-section">
            <div class="section-heading">
              <div>
                <span class="eyebrow">TERKAIT</span>
                <h2>Artikel lain yang mungkin membantu</h2>
              </div>
            </div>

            <div class="related-grid">
              ${related.map(r=>`
                <a class="related-card" href="#${r.slug}">
                  <strong>${r.title}</strong>
                  <span>${r.description}</span>
                </a>
              `).join('')}
            </div>
          </section>

          <nav class="article-nav">
            <a class="nav-prev" href="#${prev.slug}">
              <small>← Sebelumnya</small>
              <strong>${prev.title}</strong>
            </a>

            <a class="nav-next" href="#${next.slug}">
              <small>Berikutnya →</small>
              <strong>${next.title}</strong>
            </a>
          </nav>

          <footer class="footer">
  <div class="footer-brand">
    <strong>${siteConfig.footerBrand||'CAPTAIN Z'}</strong>
    <span>${siteConfig.footerTitle||'Account Help Center'}</span>
  </div>

  <p class="footer-description">
    ${siteConfig.footerDescription||'Pusat panduan pemulihan dan keamanan akun digital.'}
  </p>

  <nav class="footer-links" aria-label="Navigasi footer">
    ${(siteConfig.footerLinks||[]).map(link=>`
      <a href="${link.href}">${link.label}</a>
    `).join('')}
  </nav>

  <div class="footer-divider"></div>

  <div class="footer-bottom">
    <span>${siteConfig.footerPrimary||''}</span>
    <span>${siteConfig.footerSecondary||''}</span>
  </div>
</footer>

        </div>

        <aside class="toc">
          <strong>Daftar isi</strong>

          ${a.sections.map((s,i)=>`
            <a href="#section-${i}">
              ${s.heading}
            </a>
          `).join('')}
        </aside>

      </div>
    </article>
    `;

activateSmartOfficialLinks(a);
scrollTop();
}
function renderFooter(){
  return `<footer class="footer"><div class="footer-brand"><strong>${siteConfig.footerBrand||'CAPTAIN Z'}</strong><span>${siteConfig.footerTitle||'Account Help Center'}</span></div><p class="footer-description">${siteConfig.footerDescription||'Pusat panduan pemulihan dan keamanan akun digital melalui prosedur resmi dan aman.'}</p><nav class="footer-links" aria-label="Navigasi footer">${(siteConfig.footerLinks||[]).map(link=>`<a href="${link.href}">${link.label}</a>`).join('')}</nav><div class="footer-divider"></div><div class="footer-bottom"><span>${siteConfig.footerPrimary||''}</span><span>${siteConfig.footerSecondary||''}</span></div></footer>`;
}
function notFound(){appView.innerHTML=`<section class="not-found"><span class="eyebrow">404</span><h2>Panduan tidak ditemukan</h2><p class="article-desc">Topik mungkin sudah dipindahkan atau alamatnya salah.</p><a href="#home">Kembali ke beranda</a></section>`;scrollTop()}


function normalizeSearch(text){
  return String(text||'')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^\p{L}\p{N}\s-]/gu,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function getSearchTerms(query){
  const words=normalizeSearch(query).split(' ').filter(Boolean);
  const expanded=new Set(words);

  words.forEach(word=>{
    (searchAliases[word]||[]).forEach(alias=>{
      expanded.add(normalizeSearch(alias));
    });
  });

  return [...expanded];
}

function countMatches(text,terms){
  const value=normalizeSearch(text);
  return terms.reduce((score,term)=>{
    if(!term)return score;

    if(value===term)return score+20;

    if(value.includes(` ${term} `))return score+10;

    if(value.startsWith(`${term} `))return score+8;

    if(value.includes(term))return score+5;

    return score;
  },0);
}

function queryScore(a,q){
  const query=normalizeSearch(q);
  if(!query)return 0;

  const terms=getSearchTerms(query);

  const title=normalizeSearch(a.title);
  const description=normalizeSearch(a.description);
  const category=normalizeSearch(a.category);
  const tags=(a.tags||[]).map(normalizeSearch);
  const sections=a.sections||[];

  let score=0;

  if(title===query)score+=200;

  if(title.includes(query))score+=100;

  if(description.includes(query))score+=35;

  if(category.includes(query))score+=45;

  if(tags.some(tag=>tag===query))score+=55;

  if(tags.some(tag=>tag.includes(query)))score+=30;

  terms.forEach(term=>{
    if(title.includes(term))score+=30;
    if(category.includes(term))score+=20;
    if(tags.some(tag=>tag.includes(term)))score+=18;
    if(description.includes(term))score+=10;

    sections.forEach(section=>{
      const heading=normalizeSearch(section.heading);
      const text=normalizeSearch(section.text||'');
      const items=normalizeSearch((section.items||[]).join(' '));

      if(heading.includes(term))score+=12;
      if(text.includes(term))score+=3;
      if(items.includes(term))score+=3;
    });
  });

  const originalWords=query.split(' ').filter(Boolean);
  const matchedWords=originalWords.filter(word=>{
    return title.includes(word)||
      category.includes(word)||
      tags.some(tag=>tag.includes(word))||
      description.includes(word);
  });

  if(originalWords.length>1){
    score+=matchedWords.length*8;

    if(matchedWords.length===originalWords.length){
      score+=40;
    }
  }

  return score;
}
function escapeHTML(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}
function runSearch(q){
  const value=q.trim();

  if(!value){
    searchPanel.hidden=true;
    searchResults.innerHTML='';
    searchTitle.textContent='Hasil pencarian';
    return;
  }

  const results=articles
    .map(a=>({
      a,
      score:queryScore(a,value)
    }))
    .filter(result=>result.score>0)
    .sort((a,b)=>{
      if(b.score!==a.score)return b.score-a.score;
      return a.a.title.localeCompare(b.a.title);
    })
    .slice(0,25);

  searchTitle.textContent=`Hasil untuk "${value}"`;

  searchResults.innerHTML=results.length
    ? results.map(({a})=>`
      <a class="search-card" href="#${a.slug}">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
        <div>
          <h3>${a.title}</h3>
          <p>${a.category} · ${a.description}</p>
        </div>
        <span class="search-arrow">→</span>
      </a>
    `).join('')
    : `
      <div class="empty-state">
        Tidak ada artikel yang cocok dengan
        "<strong>${escapeHTML(value)}</strong>".
        <br>
        Coba kata kunci seperti "diretas",
        "password", "Google", "Instagram", atau "2FA".
      </div>
    `;

  searchPanel.hidden=false;
}
function syncSearchInputs(value){if(sidebarSearch&&sidebarSearch.value!==value)sidebarSearch.value=value;const hero=document.getElementById('heroSearch');if(hero&&hero.value!==value)hero.value=value}
function handleHash(){
  const raw=location.hash.replace(/^#/,'').trim();

  if(raw.startsWith('category=')){
    searchPanel.hidden=true;
    categoryPage(raw.slice(9));
    renderNav();
    closeSidebar();
    return;
  }

  if(raw===''){
    searchPanel.hidden=true;
    history.replaceState(null,'','#home');
    renderHome();
    renderNav();
    closeSidebar();
    return;
  }

  if(raw==='home'){
    searchPanel.hidden=true;
    renderHome();
    renderNav();
    closeSidebar();
    return;
  }

  searchPanel.hidden=true;
  articlePage(raw);
  renderNav();
  closeSidebar();
}
sidebarNav.addEventListener('click',e=>{const btn=e.target.closest('[data-toggle-cat]');if(btn){const slug=btn.dataset.toggleCat;if(state.navOpen.has(slug))state.navOpen.delete(slug);else state.navOpen.add(slug);renderNav()}});
document.addEventListener('click',e=>{const link=e.target.closest('a[data-route]');if(link&&window.innerWidth<=820)closeSidebar()});
document.getElementById('menuToggle').addEventListener('click',openSidebar);document.getElementById('sidebarClose').addEventListener('click',closeSidebar);overlay.addEventListener('click',closeSidebar);document.getElementById('closeSearch').addEventListener('click',()=>{searchPanel.hidden=true;location.hash='#home'});
sidebarSearch.addEventListener('input',e=>{
  syncSearchInputs(e.target.value);
  if(window.innerWidth<=820)closeSidebar();
  runSearch(e.target.value);
});
document.getElementById('themeIndicator').addEventListener('click',()=>{saveTheme()});
window.addEventListener('storage',e=>{const key=(window.SITE_CONFIG&&window.SITE_CONFIG.themeKey)||'Captain-z-MD.theme';if(e.key===key)saveTheme()});
window.addEventListener('hashchange',handleHash);
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();const input=document.getElementById('heroSearch')||sidebarSearch;input?.focus()}if(e.key==='Escape')closeSidebar()});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.installPrompt=e;installBtn.hidden=false});installBtn.addEventListener('click',async()=>{if(!state.installPrompt)return;state.installPrompt.prompt();await state.installPrompt.userChoice;state.installPrompt=null;installBtn.hidden=true});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
document.addEventListener('click',e=>{
  const tocLink=e.target.closest('.toc a[href^="#section-"]');

  if(!tocLink)return;

  e.preventDefault();

  const target=document.querySelector(tocLink.getAttribute('href'));

  if(target){
    target.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });
  }
});
saveTheme();renderNav();handleHash();
