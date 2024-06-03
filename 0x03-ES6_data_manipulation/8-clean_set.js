export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      res += `${elem.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
