export default function Modal({ children }) {
    return (
        <dialog id="modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Giriş Yap</h3>
                <p className="py-4">{children}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
} 