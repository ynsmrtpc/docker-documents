export default function ModalButton({ children, ...props }) {
    return (
        <button {...props} onClick={() => document.getElementById('modal').showModal()}>{children}</button>
    )
}