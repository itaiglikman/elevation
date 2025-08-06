import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button/Button";
import { Company } from "./Components/Company/Company";
import { Temp } from "./Components/TempArea/Temp/Temp";
import { Like } from "./Components/Like/Like";

function App() {
  const companiesData = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  const [companies, setCompanies] = useState(companiesData);

  type Reservation = {
    day: string;
    time: number;
    name: string;
  };

  function Calendar( {reservations}: {reservations: Reservation[]} ) {
    return (
      <div id="calendar">
        <h2>Calender</h2>
        {reservations.map((r, i) => (
          <p key={i}>
            {r.name} has a reservation on {r.day} @ {r.time}
          </p>
        ))}
      </div>
    );
  }

  function Register(props: { reservations: Reservation[] }) {
    const reservations = props.reservations;
    return (
      <div id="register">
        <h2>Register - can't take orders in this time</h2>
        {reservations.map((r, i) => (
          <p key={i}>
            {r.day} @ {r.time}
          </p>
        ))}
      </div>
    );
  }

  const [reservations, setReservations] = useState<Reservation[]>([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);

  return (
    <div className="App">
      <div>
        <Calendar reservations={reservations} />
        <Register reservations={reservations} />
      </div>
      <Button />
      {companies.map((c) => (
        <Company company={c} key={c.name} />
      ))}
      <Temp/>
      <Like/>
    </div>
  );
}

export default App;
