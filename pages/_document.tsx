import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
//   static async getInitialProps(ctx: any) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }
  static getInitialProps ({ renderPage }: {renderPage: any}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App:any) => (props : any) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  
  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}