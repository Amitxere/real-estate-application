import React, { useState } from "react";

const DocumentsPage = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Property Agreement",
      type: "PDF",
      status: "Verified",
    },
    {
      id: 2,
      name: "Sale Deed",
      type: "PDF",
      status: "Pending",
    },
    {
      id: 3,
      name: "Property Tax Receipt",
      type: "PDF",
      status: "Verified",
    },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const newDocument = {
      id: documents.length + 1,
      name: file.name,
      type: file.name.split(".").pop().toUpperCase(),
      status: "Pending",
    };

    setDocuments([...documents, newDocument]);
  };

  return (
    <div className="documents-page">
      <div className="documents-header">
        <div>
          <h1>Property Documents</h1>
          <p>Manage and view your property-related documents.</p>
        </div>

        <label className="upload-button">
          + Upload Document
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleUpload}
            hidden
          />
        </label>
      </div>

      <div className="documents-summary">
        <div className="document-summary-card">
          <span>📁</span>
          <h3>{documents.length}</h3>
          <p>Total Documents</p>
        </div>

        <div className="document-summary-card">
          <span>✅</span>
          <h3>
            {documents.filter((doc) => doc.status === "Verified").length}
          </h3>
          <p>Verified Documents</p>
        </div>

        <div className="document-summary-card">
          <span>⏳</span>
          <h3>
            {documents.filter((doc) => doc.status === "Pending").length}
          </h3>
          <p>Pending Documents</p>
        </div>
      </div>

      <div className="documents-card">
        <h2>My Documents</h2>

        <div className="documents-list">
          {documents.map((document) => (
            <div className="document-item" key={document.id}>
              <div className="document-icon">📄</div>

              <div className="document-info">
                <h3>{document.name}</h3>
                <p>{document.type} Document</p>
              </div>

              <span
                className={`document-status ${
                  document.status === "Verified"
                    ? "verified"
                    : "pending"
                }`}
              >
                {document.status}
              </span>

              <button
                className="view-document-button"
                onClick={() =>
                  alert(`Viewing ${document.name}`)
                }
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;