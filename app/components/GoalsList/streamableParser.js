export const parse = (url) => {
	const parser = document.createElement('a');
  parser.href = url;
  return parser.pathname.split('/').pop();
};