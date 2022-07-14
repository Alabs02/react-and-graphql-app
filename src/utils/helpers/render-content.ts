const renderContent = (content: any, message: string = 'No data') => {
  if (content === (null || undefined || '')) {
    return message;
  }
  return content;
}

export { renderContent as default };