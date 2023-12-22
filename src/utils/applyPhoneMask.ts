export default function applyPhoneMask(input: string) {
  const cleanInput = input.replace(/\D/g, '');

  const isCellphone = cleanInput.length === 11 && cleanInput[2] === '9';
  const isLandline =
    cleanInput.length === 10 ||
    (cleanInput.length === 11 && cleanInput[2] !== '9');

  if (isCellphone) {
    return cleanInput.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  } else if (isLandline) {
    return cleanInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return cleanInput;
  }
}
