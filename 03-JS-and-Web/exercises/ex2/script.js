const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener('click', () => {
    const guestName = document.getElementById('guestName').value;
    if (!guestName) return alert(`no input`);
    if (Object.hasOwn(reservations, guestName)) {
        const guest = reservations[guestName];
        if (guest.claimed) {
            alert(`Welcome ${guestName}`);
            guest.claimed = !guest.claimed;
        } else alert(`Hmm, someone already claimed this reservation`);
    } else alert(`You have no reservation`);
})