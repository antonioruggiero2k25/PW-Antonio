document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-button");
  const yearSelector = document.getElementById("report-year");

  if (downloadButton && yearSelector) {
      // Aggiorna il link del pulsante quando cambia l'anno selezionato
      yearSelector.addEventListener("change", function () {
          const selectedYear = yearSelector.value;
          downloadButton.setAttribute("href", `reports/report_${selectedYear}.pdf`);
      });

      // Gestisce il download del file
      downloadButton.addEventListener("click", function (event) {
          event.preventDefault();
          
          const fileUrl = downloadButton.getAttribute("href");
          const fileName = fileUrl.split('/').pop();

          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          console.log(`Download avviato per: ${fileName}`);
      });
  }
});
