export default function (ErrorCode) {
  switch (ErrorCode) {
    case "auth/email-already-exists":
      return "E-posta Zaten Kayıtlı";
      break;
    case "auth/invalid-credential":
      return "E-posta veya Şifre Yanlış";
      break;
    case "auth/invalid-email":
      return "E-posta Eksik";
      break;
    case "auth/invalid-password":
      return "Şifre Eksik";
      break;
    case "auth/user-not-found":
      return "Kullanıcı Bulunamadı";
      break;
    case "auth/too-many-requests":
      return "Çok fazla istek gönderildi";
      break;
    case "auth/missing-password":
      return "Şifre Eksik";
      break;
    default:
      return ErrorCode;
      break;
  }
}
