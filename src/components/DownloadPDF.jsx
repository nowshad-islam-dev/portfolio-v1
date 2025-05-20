import { FaCloudDownloadAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function DownloadPDF() {
  const [isHovering, setIsHovering] = useState(false);

  const handleDownload = () => {
    // Create a link to the resume file in the project directory
    // For files in the assets directory, we need to import them
    // This triggers the asset pipeline to handle them correctly

    try {
      fetch('/documents/resume.pdf')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then((blob) => {
          // Create a blob URL for the PDF
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'resume.pdf';
          document.body.appendChild(link);
          link.click();

          // Clean up the URL object and remove the link element
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
          console.error('Error downloading the resume:', error);
          alert(
            'Sorry, there was an error downloading the resume. Please try again later.'
          );
        });
    } catch (error) {
      console.error('Error in download handler:', error);
      alert(
        'Sorry, there was an error downloading the resume. Please try again later.'
      );
    }
  };

  return (
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <div
        className={`flex items-center text-sm mr-10 cursor-pointer transition-opacity duration-300 ${
          isHovering ? 'opacity-50' : 'opacity-100'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleDownload}
      >
        <FaCloudDownloadAlt className="m-[5.5px] text-[20px]" />
        <a className="hover:underline">Download Resume</a>
      </div>
    </div>
  );
}
