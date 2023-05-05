import AdminTransactionList from "@/components/AdminTransactionList";

export default function Transaction(){
    return(
        <div>
            
            <h1 className="text-xl font-semibold my-4 px-2">You have been helped by these people.</h1>

            
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Current Country
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount(RS)
                </th>
                <th scope="col" className="px-6 py-3">
                   Date of donation
                </th>
            </tr>
        </thead>
        <tbody>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
            <AdminTransactionList/>
        
        </tbody>
    </table>
</div>

        </div>
    )
}