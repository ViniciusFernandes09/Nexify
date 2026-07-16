
import './styles.css';

type Props = {
    text: string;
}

export default function ButtonPrimary({text} : Props) {
    return (
        <div className="nxf-btn nxf-btn-blue">
            {text}
        </div>
    );
}