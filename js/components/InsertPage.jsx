// js/components/InsertPage.jsx
import { useRouter } from 'next/router';
export default function InsertPage() {
	const insertRecord = (event) => {
		console.log(document.getElementById("userName").value);
		if (document.getElementById("userName").value != null && document.getElementById("userName").value != undefined) {
			event.preventDefault();
			const userName = document.getElementById("userName").value;
			const amount = document.getElementById("amount").value;
			const currency = document.getElementById("currency").value;
			const category = document.getElementById("category").value;
			const description = document.getElementById("description").value;
			const data = { userName, amount, currency, category, description };
			fetch("/api/records", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}).then(() => {
				console.log("New record inserted");
				document.getElementById("userName").value = "";
				document.getElementById("amount").value = "";
				document.getElementById("currency").value = "";
				document.getElementById("category").value = "";
				document.getElementById("description").value = "";
			});
		}

	}
	const router = useRouter();
	function handleClick() {
		router.back();
	}
	return (
		<section className="bg-gradient-to-br from-green-500 to-blue-500 h-screen">
			<div className="container px-6 py-10 mx-auto">
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4 text-lg"
					onClick={handleClick}
				>Go Back</button>
				<h1 className="w-[500px] mx-auto text-center text-6xl">Expense Tracker</h1>

				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Track your family expenses easily</p>


				<form>
					<div className="mb-6">
						<label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
						<input type="text" id="userName"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter user name" required />
					</div>
					<div className="mb-6">
						<label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
						<input type="number" id="amount"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter amount" required />
					</div>
					<div className="mb-6">
						<label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
						<input type="text" id="currency"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter currency" required />
					</div>
					<div className="mb-6">
						<label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
						<input type="text" id="category"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter category" required />
					</div>
					<div className="mb-6">
						<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
						<input type="text" id="description"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter description" required />
					</div>

					<button type="submit"
						onClick={insertRecord}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
				</form>
			</div>
		</section>
	)
}