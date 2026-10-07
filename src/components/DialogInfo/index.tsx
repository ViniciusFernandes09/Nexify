import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({message, onDialogClose}: Props) {

    return (
        <div className="nxf-dialog-bg" onClick={() => onDialogClose()}>
            <div className="nxf-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="nxf-dialog-btn-container" onClick={() => onDialogClose()}>
                    <ButtonPrimary text="Ok"/>
                </div>
            </div>
        </div>
    )
}