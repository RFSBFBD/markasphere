const WHATSAPP_NUMBER = "201062777300"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const SITE_URL = "https://markasphere.com"
export const BRAND_NAME = "MarkaSphere"

export function getWhatsAppUrl(message = "") {
  const text = encodeURIComponent(message)
  return `${WHATSAPP_URL}?text=${text}`
}
