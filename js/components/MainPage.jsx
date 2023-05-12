// js/components/MainPage.jsx
import { useEffect, useState } from "react";
import Link from 'next/link';
import FinancialRecordDetails from "./FinancialRecordDetails";
export default function MainPage() {
	const [records, setRecords] = useState([]);
	const [selectedRecord, setSelectedRecord] = useState(null);

	const handleRecordClick = (record) => {
		setSelectedRecord(record);
	};
	useEffect(() => {
		try {
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-gradient-to-br from-green-500 to-blue-500 h-screen">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="text-center text-6xl font-bold text-white tracking-wide mb-10">
					Financial Family Records
				</h1>
				<div className="flex justify-center mt-8">
					<Link href="/insert">
						<button
							type="button"
							className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
						>
							Insert Record
						</button>
					</Link>
				</div>
				<div className="flex justify-center mt-8">
					<Link href="/chat">
						<button
							type="button"
							className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
						>
							Access Chat
						</button>
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{records.map(record => (
						<div key={record._id}
							className="bg-white rounded-xl shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
							<div className="px-4 py-2 bg-gray-100">
								<h5 className="text-lg font-bold text-white" style={{ backgroundImage: 'linear-gradient(to right, #0066CC, #0000FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
									{record.userName}
								</h5>
							</div>
							<div className="px-4 py-2">
								<p className="text-gray-700 dark:text-gray-400">
									<span className="font-bold">Amount:</span> {record.amount} {record.currency}
								</p>
								<p className="text-gray-700 dark:text-gray-400">
									<span className="font-bold">Category:</span> {record.category}
								</p>
								<p className="text-gray-700 dark:text-gray-400">
									<span className="font-bold">Description:</span> {record.description}
								</p>
							</div>
							<div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
								<div className="flex justify-start">
									<button
										type="button"
										id={record._id}
										onClick={deleteRecord}
										className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
										Delete
									</button>
								</div>
								<div className="flex justify-end">
									<button
										type="button"
										onClick={() => handleRecordClick(record)}
										className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2.5 mr-2 mb-2">
										Watch record
									</button>
								</div>
							</div>

						</div>
					))}
				</div>
				<div className="overflow-y-auto h-screen">
					{selectedRecord && (
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
							<div className="bg-white rounded-lg w-3/4 mx-auto p-4 md:p-6 max-h-screen overflow-y-scroll">
								<button
									className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg mt-4"
									onClick={() => setSelectedRecord(null)}
								>
									Close
								</button>
								<FinancialRecordDetails record={selectedRecord} />
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);


}