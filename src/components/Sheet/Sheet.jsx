// import React from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { selectContacts } from "redux/selector";
// import { addContacts } from "redux/phoneBook/phoneBook.thunk";

// export const Sheet = props => {
//   const dispatch = useDispatch();
//   const contact = useSelector(selectContacts);

//   const handleAdd = event => {
//     const {
//       name: { value: text },
//       number: { value: num },
//     } = event.currentTarget.elements;

//     event.preventDefault();

//     const nameTaken = contact.some(elements => elements.name === text);
//     const numberTaken = contact.some(elements => elements.phone === num);
//     if (nameTaken && numberTaken) {
//       return alert(`${text} is alredy in Phonebook`);
//     }
//     dispatch(addContacts({ text, num }));
//   };

//   return (
//     <div className={css.Box}>
//       <form onSubmit={handleAdd}>
//         <div aria-labelledby="phonebook" className={css.phonebook}>
//           <p id="phonebook" className={css.title}>
//             Phonebooks
//           </p>
//           <label className={css.name} htmlFor="Name">
//             Name
//           </label>
//           <input
//             className={css.inputName}
//             id="Name"
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label className={css.name} htmlFor="number">
//             Phone
//           </label>
//           <input
//             className={css.inputName}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </div>
//         <button type="submit" className={css.btn}>
//           Add Contact
//         </button>
//       </form>
//     </div>
//   );
// };
