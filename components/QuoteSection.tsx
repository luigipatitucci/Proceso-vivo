import styles from "./QuoteSection.module.css";

interface QuoteSectionProps {
  quote: string;
  author: string;
  variant?: 'default' | 'compact';
}

export default function QuoteSection({ quote, author, variant = 'default' }: QuoteSectionProps) {
  return (
    <section className={`${styles.quoteSection} ${variant === 'compact' ? styles.compact : ''}`}>
      <div className={styles.container}>
        <div className={styles.accentLine}></div>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>{quote}</p>
          <cite className={styles.author}>{author}</cite>
        </blockquote>
      </div>
    </section>
  );
}
