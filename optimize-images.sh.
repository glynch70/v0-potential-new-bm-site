import React, { useState, useCallback, ChangeEvent, useMemo } from 'react';

// Utility function to convert Blob to base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

interface OptimizedImage {
  id: string; // Unique ID for keying
  originalFile: File;
  compressedDataUrl: string;
  originalSize: number;
  compressedSize: number;
  fileName: string;
  mimeType: string;
}

const App: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [optimizedFiles, setOptimizedFiles] = useState<OptimizedImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setOptimizedFiles([]); // Clear previous optimizations
    if (event.target.files) {
      // Fix: Explicitly type `file` as `File` to ensure `file.type` is recognized.
      const filesArray = Array.from(event.target.files).filter((file: File) =>
        file.type === 'image/png' || file.type === 'image/jpeg'
      );
      if (filesArray.length < event.target.files.length) {
        setError('Only .png and .jpg files are supported.');
      }
      setSelectedFiles(filesArray);
    }
  }, []);

  const clearFiles = useCallback(() => {
    setSelectedFiles([]);
    setOptimizedFiles([]);
    setError(null);
  }, []);

  const optimizeImages = useCallback(async () => {
    if (selectedFiles.length === 0) {
      setError('Please select images to optimize.');
      return;
    }

    setLoading(true);
    setError(null);
    setOptimizedFiles([]); // Clear previous results before starting new optimization

    const results: OptimizedImage[] = [];

    for (const file of selectedFiles) {
      try {
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);
        img.src = objectUrl;

        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = reject;
        });

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Could not get canvas context.');
        }

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        let compressedDataUrl: string;
        let quality: number;

        // The `handleFileChange` callback ensures `selectedFiles` only contains 'image/png' or 'image/jpeg'.
        // Therefore, we can safely assume `file.type` will be one of these, and no 'else' fallback is needed.
        if (file.type === 'image/png') {
          quality = 0.8; // 80% quality for PNG
          compressedDataUrl = canvas.toDataURL('image/png', quality);
        } else { // file.type must be 'image/jpeg' due to prior filtering
          quality = 0.85; // 85% quality for JPG
          compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        const compressedBlob = await fetch(compressedDataUrl).then(res => res.blob());
        const originalSize = file.size;
        const compressedSize = compressedBlob.size;

        results.push({
          id: `${file.name}-${Date.now()}`, // Unique ID
          originalFile: file,
          compressedDataUrl,
          originalSize,
          compressedSize,
          fileName: file.name,
          mimeType: file.type,
        });

        URL.revokeObjectURL(objectUrl); // Clean up
      } catch (err) {
        console.error(`Error optimizing ${file.name}:`, err);
        setError(`Failed to optimize ${file.name}.`);
      }
    }
    setOptimizedFiles(results);
    setLoading(false);
  }, [selectedFiles]);

  const totalOriginalSize = useMemo(() => {
    return selectedFiles.reduce((sum, file) => sum + file.size, 0);
  }, [selectedFiles]);

  const totalOptimizedSize = useMemo(() => {
    return optimizedFiles.reduce((sum, file) => sum + file.compressedSize, 0);
  }, [optimizedFiles]);

  const formatBytes = useCallback((bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }, []);

  // Display message if no files are selected
  const hasSelectedFiles = selectedFiles.length > 0;
  const hasOptimizedFiles = optimizedFiles.length > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Image Optimizer</h1>

      <div className="mb-6">
        <label
          htmlFor="file-upload"
          className="relative block w-full border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500 transition-all duration-200"
        >
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
            disabled={loading}
          />
          <svg className="mx-auto h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="mt-2 block text-sm font-medium text-gray-900">
            {hasSelectedFiles ? `Selected ${selectedFiles.length} files` : 'Drag and drop or click to select images (.png, .jpg)'}
          </span>
          {hasSelectedFiles && (
            <span className="text-xs text-gray-500 mt-1 block">
              Total original size: {formatBytes(totalOriginalSize)}
            </span>
          )}
        </label>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={optimizeImages}
          disabled={!hasSelectedFiles || loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300 transition-colors duration-200"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Optimizing...
            </span>
          ) : (
            'Optimize Images'
          )}
        </button>
        <button
          onClick={clearFiles}
          disabled={!hasSelectedFiles && !hasOptimizedFiles || loading}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-200"
        >
          Clear All
        </button>
      </div>

      {hasOptimizedFiles && (
        <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Optimization Results</h2>
          <p className="text-center text-lg font-medium text-gray-700 mb-6">
            Total Original Size: <span className="text-indigo-600">{formatBytes(totalOriginalSize)}</span> &rarr;
            Total Optimized Size: <span className="text-green-600">{formatBytes(totalOptimizedSize)}</span> (
            <span className="font-bold">
              {((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)}% Reduction
            </span>)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizedFiles.map((image) => (
              <div key={image.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col items-center">
                <img
                  src={image.compressedDataUrl}
                  alt={`Optimized ${image.fileName}`}
                  className="max-w-full h-32 object-contain mb-4 rounded-md border border-gray-100"
                />
                <p className="font-medium text-gray-700 text-center truncate w-full mb-1">{image.fileName}</p>
                <p className="text-sm text-gray-600">
                  Original: <span className="font-semibold">{formatBytes(image.originalSize)}</span>
                </p>
                <p className="text-sm text-green-600 mb-3">
                  Optimized: <span className="font-semibold">{formatBytes(image.compressedSize)}</span> (
                  {((1 - image.compressedSize / image.originalSize) * 100).toFixed(2)}%
                  )
                </p>
                <a
                  href={image.compressedDataUrl}
                  download={`optimized-${image.fileName}`}
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasSelectedFiles && !loading && !hasOptimizedFiles && (
        <div className="text-center text-gray-500 mt-8">
          <p>Select images to get started!</p>
        </div>
      )}
    </div>
  );
};

export default App;
