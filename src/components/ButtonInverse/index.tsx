import './styles.css'

type Props = {
    text: string;
}

export default function ButtonInverse({text} : Props) {
    return (
        <div className="nxf-btn nxf-btn-black">
              {text}
        </div>
    );
}