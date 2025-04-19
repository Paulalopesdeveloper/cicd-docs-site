export function Footer() {
  return (
    <footer className="text-sm text-center py-4 text-gray-600 border-t border-gray-200 mt-auto">
      <p className="font-poppins">
        &copy; {new Date().getFullYear()} PokéDocs CI/CD
      </p>
      <p className="text-xs mt-1">
        Fabrício Moreira · Paula Lopes
      </p>
    </footer>
  );
}
