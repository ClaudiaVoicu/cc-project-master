import React from "react";

const FinancialRecordDetails = ({ record }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 overflow-y-auto max-h-400">
            <h1 className="text-3xl font-bold mb-4">User: {record.userName}</h1>
            <div className="border-b border-gray-300 pb-4 mb-4">
                <p className="text-lg mb-2">
                    <span className="font-semibold">Amount:</span>{" "}
                    <span className="text-xl text-blue-500">
                        {record.amount} {record.currency}
                    </span>
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Category:</span>{" "}
                    <span className="text-gray-600">{record.category}</span>
                </p>
            </div>
            <p className="text-lg mb-4" style={{ whiteSpace: "pre-wrap" }}>
                <span className="font-semibold">Description:</span>{" "}
                <span className="text-gray-600">{record.description}</span>
            </p>
        </div>

    );
};

export default FinancialRecordDetails;