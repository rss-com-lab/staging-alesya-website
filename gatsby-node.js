const languages = {
  ru: {
    path: 'ru',
    title: 'Русский',
    default: true,
  },
  en: {
    path: 'en',
    title: 'English',
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(languages).map(lang => {
      const localizedPath = languages[lang].default
        ? page.path
        : languages[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          pathname: page.path,
        }
      })
    })

    resolve()
  })
}