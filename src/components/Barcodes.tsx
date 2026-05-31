export function BarcodesShowcase() {
  const barcodeCategories = [
    {
      title: "EAN & UPC",
      items: ["EAN-13", "EAN-13+2", "EAN-13+5", "EAN-99", "EAN-13 Composite", "EAN-8", "UCC-8", "JAN-8", "EAN-Velocity", "EAN-8 Composite", "UPC-A", "UCC-12", "UPC-A+2", "UPC-A+5", "UPC-A Composite", "UPC-E", "UPC-E0", "UPC-E1", "UPC-E+2", "UPC-E+5", "UPC-E Composite"]
    },
    {
      title: "Publishing (ISBN, ISMN, ISSN)",
      items: ["ISBN", "ISBN-13", "ISBN-10", "Bookland EAN-13", "ISMN", "ISMN-13", "ISMN-10", "ISSN", "ISSN+2"]
    },
    {
      title: "GS1 DataBar",
      items: ["GS1 DataBar Omnidirectional", "RSS-14", "GS1 DataBar Omnidirectional Composite", "GS1 DataBar Stacked Omnidirectional", "GS1 DataBar Expanded", "GS1 DataBar Expanded Stacked", "GS1 DataBar Truncated", "GS1 DataBar Stacked", "GS1 DataBar Limited", "GS1 North American Coupon Code"]
    },
    {
      title: "Logistics, GS1-128 & ITF-14",
      items: ["GS1-128", "UCC/EAN-128", "EAN-128", "UCC-128", "GS1-128 Composite", "SSCC-18", "EAN-18", "NVE", "EAN-14", "UCC-14", "ITF-14", "SCC-14", "UPC Case Code"]
    },
    {
      title: "2D Barcodes (QR, Data Matrix, Aztec, PDF417)",
      items: ["QR Code", "Quick Response Code", "Micro QR Code", "Rectangular Micro QR Code", "rMQR", "GS1 QR Code", "GS1 Digital Link QR Code", "Swiss QR Code", "Data Matrix (ECC 200)", "GS1 DataMatrix", "GS1 Digital Link Data Matrix", "Aztec Code", "Compact Aztec Code", "Aztec Runes", "PDF417", "Compact PDF417", "MicroPDF417"]
    },
    {
      title: "Postal Services",
      items: ["USPS POSTNET", "USPS PLANET", "USPS Intelligent Mail (OneCode)", "USPS FIM (A, B, C, D)", "Royal Mail", "RM4SCC", "CBC", "Royal Mail Mailmark", "Royal TNT Post", "KIX", "Japan Post", "Australia Post", "Deutsche Post Identcode", "DHL Identcode", "Deutsche Post Leitcode", "DHL Leitcode"]
    },
    {
      title: "Pharmaceuticals",
      items: ["Pharmacode", "Pharmaceutical Binary Code", "Two-track Pharmacode", "Code 32", "Italian Pharmacode", "IMH", "Pharmazentralnummer (PZN, PZN-8, PZN-7)"]
    },
    {
      title: "Standard 1D Barcodes",
      items: ["Code 39", "Code 3 of 9", "LOGMARS", "Code 39 Extended", "Code 93", "Code 93 Extended", "Code 128 (A, B, C)", "Code 2 of 5", "Interleaved 2 of 5", "Code 11", "Codabar", "NW-7", "Plessey", "MSI Plessey", "Telepen", "Channel Code", "PosiCode", "BC412"]
    },
    {
      title: "Other 2D & Composite",
      items: ["Han Xin Code", "MaxiCode", "Codablock-F", "Code 16K", "Code 49", "Code One", "DotCode", "GS1 DotCode", "Ultracode", "GS1 Composite Components (CC-A, CC-B, CC-C)", "HIBC Symbols"]
    }
  ];

  return (
    <section id="barcodes" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Comprehensive Support</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Generate 100+ Barcode Types Instantly</h2>
          <p className="text-lg text-slate-600">
            From standard UPC and EAN codes to complex 2D Data Matrix, PDF417, and GS1 Digital Links, our tool guarantees razor-sharp prints that scan flawlessly every time. Perfect for retail, warehousing, shipping, and specialized pharma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barcodeCategories.map((category, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-500 text-[20px]">qr_code_scanner</span>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 leading-snug">
                    <span className="text-slate-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
