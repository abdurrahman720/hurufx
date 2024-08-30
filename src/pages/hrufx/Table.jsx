const Table = () => {
  return (
    <div data-aos="fade-up" className="my-10 max-w-7xl mx-auto min-w-full">
      <div className="flex flex-col overflow-auto w-full">
        <div className="shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-x-scroll">
              {" "}
              <table className="w-full divide-y divide-gray-200 table-auto dark:divide-gray-700 border border-white">
                <thead className="bg-black">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-lg font-bold tracking-wider text-left uppercase text-white border border-white"
                    >
                      Aspect
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-lg font-bold tracking-wider text-left uppercase text-white border border-white"
                    >
                      HURUFx (Data-Driven)
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-lg font-bold tracking-wider text-left uppercase text-white border border-white"
                    >
                      CompaniesX (Non-Data-Driven)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Decision Making
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Data driven
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Intuition
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Accuracy
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Highly Accurate
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Less reliable
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Customer Understanding
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Deep insights
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Limited
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Marketing ROI
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Higher
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Lower
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Competitive Advantage
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Leveraging data for competitive edge
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Disadvantage due to lack of insight
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Cost
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Justified
                    </td>
                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap bg-black text-white border border-white dark:text-white">
                      Unjustified
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
