type Props = {
	children: React.ReactNode;
};

export const FeedWrapper = ({ children }: Props) => {
	return (
		// When we reach bottom of the feed, we have some space
		<div className="flex-1 relative top-0 pb-10">{children}</div>
	);
};
