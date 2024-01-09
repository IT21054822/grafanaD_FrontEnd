import './Dashboard.css'

function Dashboard() {
    const grafanaDashboardUrl = 'https://snapshots.raintank.io/dashboard/snapshot/VRrBg9waqzPawqYICwTtLYWklfX8IvVk';

    return (
      <div>
        <iframe
          src={grafanaDashboardUrl}
          width="100%"
          height="600"
          frameBorder="0"
          title="Grafana Dashboard"
        />
      </div>
    );
  };
export default Dashboard
