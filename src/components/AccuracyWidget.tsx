export default function AccuracyWidget(accuracy:number) {
    return (
        <div>
            Accuracy is
            <div>
                {/* Render only with 2 digits */}
                {(100 * accuracy).toLocaleString(undefined, {
                    maximumFractionDigits: 1,
                })}
                %
            </div>
        </div>
    );
}
