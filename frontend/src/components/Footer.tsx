// frontend/src/components/Footer.tsx
// Footer component for the application

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lincoln Adams - IS413 Enterprise Application Development - Mission #10 Assignment</p>
      </div>
    </footer>
  );
}
