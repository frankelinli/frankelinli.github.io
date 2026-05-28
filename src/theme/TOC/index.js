import React from 'react';
import TOC from '@theme-original/TOC';

export default function TOCWrapper(props) {
return (
    <>
        <div style={{color: '#0984e3', fontSize: '0.7rem', marginBottom: '5px'}}>
            [TOC 包装器占位符 - 目录上方]
        </div>
        <img src="/img/Mario.gif" alt="Mario" style={{width: '100%', marginBottom: '10px'}} />
        <hr />
        <TOC {...props} />

                <img src="/img/Mario.gif" alt="Mario" style={{width: '100%', marginBottom: '10px'}} />
        <hr />
    </>
);
}
