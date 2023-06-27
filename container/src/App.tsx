import React, { lazy, Suspense } from 'react';
const RemoteComponent = lazy(() => import('dashboard/DashboardApp'));

function App() {
	return (
		<>
			<div>
				<h1>Host Application</h1>
				<Suspense fallback={<div>Loading Remote Component..</div>}>
					<RemoteComponent />
				</Suspense>
			</div>
		</>
	);
}

export default App;
