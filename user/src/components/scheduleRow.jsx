
export default function ScheduleRow({item}) {
    return(
        <tr>
            <td className="text-left text-lg">{item.day}</td>
            <td className="text-right text-lg">{item.start}.00 - {item.end}.00</td>
        </tr>
    )
}