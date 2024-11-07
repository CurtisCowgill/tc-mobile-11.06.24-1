function WeeklyTimesheet() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const workOrders = [
    {
      name: '10626 Glengate Cir - Footings',
      hours: [8, 6, 7, 8, 4, 0, 0],
    },
    {
      name: '12755 E Canongate - Walls',
      hours: [0, 2, 1, 0, 4, 0, 0],
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Hours</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b">Work Order</th>
              {days.map(day => (
                <th key={day} className="text-center py-2 px-4 border-b">{day}</th>
              ))}
              <th className="text-center py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map((wo, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{wo.name}</td>
                {wo.hours.map((hours, idx) => (
                  <td key={idx} className="text-center py-2 px-4">
                    {hours > 0 ? hours : '-'}
                  </td>
                ))}
                <td className="text-center py-2 px-4 font-medium">
                  {wo.hours.reduce((a, b) => a + b, 0)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-medium">
              <td className="py-2 px-4">Daily Total</td>
              {days.map((_, idx) => (
                <td key={idx} className="text-center py-2 px-4">
                  {workOrders.reduce((sum, wo) => sum + wo.hours[idx], 0)}
                </td>
              ))}
              <td className="text-center py-2 px-4">
                {workOrders.reduce((sum, wo) => 
                  sum + wo.hours.reduce((a, b) => a + b, 0), 0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default WeeklyTimesheet;