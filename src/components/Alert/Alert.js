import React, {useEffect, useState, useRef} from 'react';

export default function Alert({ children, timeout, remove }) {
    const [visible, setVisible] = useState(true);
    const timer = useRef();

    useEffect(() => {
        timer.current = setTimeout(() => {
            setVisible(false);
            remove();
        }, timeout * 1000);
    }, [timer.current, timeout]);

    if(!children) {
        return null;
    }

    return visible && (
        <>
            <div>{children}</div>
        </>
    );
}