import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx);
    }
}

export default AppDocument;

