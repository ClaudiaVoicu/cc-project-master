// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{records.map(record => (
						<div key={record._id}
							className="bg-white rounded-xl shadow-xl overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
							<div className="px-4 py-2 bg-gray-100">
							<h5 className="text-lg font-bold text-white" style={{backgroundImage: 'linear-gradient(to right, #0066CC, #0000FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
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
    							<div className="flex justify-center">
        							<button type="button"
                						id={record._id}
                						onClick={deleteRecord}
                					className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-auto">
            						Delete
        							</button>
    							</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
	
	  
}