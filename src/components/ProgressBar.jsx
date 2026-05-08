export default function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-text">
        Step {step} of 3
      </div>

      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}