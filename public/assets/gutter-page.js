(() => {
  const frame = document.getElementById('inline-vTO0e0XG1KCBmnBkvqBK');
  if (!frame) return;
  const formUrl = new URL(frame.src);
  const queryParameters = new URLSearchParams(location.search);
  const campaignParameters = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  for (const parameter of campaignParameters) {
    const value = queryParameters.get(parameter);
    if (value && value.length <= 512) formUrl.searchParams.set(parameter, value);
  }
  formUrl.searchParams.set('source', 'gutter-protection-regular');
  frame.src = formUrl.toString();
})();
