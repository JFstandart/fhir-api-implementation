export interface Attachment {
    contentType: string; // The MIME type of the attachment (e.g., "image/png", "application/pdf")
    language?: string; // Optional, the language of the attachment content
    data?: string; // Optional, base64 encoded data of the attachment
    url?: string; // Optional, a URL to access the attachment
    size?: number; // Optional, size of the attachment in bytes
    hash?: string; // Optional, a hash of the attachment content for integrity checks
    title?: string; // Optional, a title or description of the attachment
    creation?: Date; // Optional, the date when the attachment was created
    height?: number; // Optional, height of the attachment (if applicable, e.g., for images)
    width?: number; // Optional, width of the attachment (if applicable, e.g. for images)
    frames?: number; // Optional, number of frames (if applicable, e.g., for animated images)
    duration?: number; // Optional, duration of the attachment (if applicable, e.g., for audio/video files)
    pages?: number; // Optional, number of pages (if applicable, e.g., for PDF documents)
}