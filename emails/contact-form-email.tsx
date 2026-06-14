interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactFormEmail({
  name,
  email,
  message
}: Readonly<ContactFormEmailProps>) {
  return (
    <div>
      <h1>Contact form submission</h1>

      <p>
        From <strong>{name}</strong> at {email}
      </p>

      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}
