import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';


const PageHead = () => {
    return (
        
    <Helmet>
        <title>Good Grief Live</title>
        <link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="images/favicon.png?v=6"  />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Helmet>
           
    );
};

export default PageHead;