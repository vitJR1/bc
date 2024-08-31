WITH daily_gas AS (
    SELECT
        date,
        SUM(gas) AS total_gas
    FROM
        test_txs
    GROUP BY
        date
),
date_series AS (
    SELECT
        generate_series(
            (SELECT MIN(date) FROM test_txs),
            (SELECT MAX(date) FROM daily_gas),
            '1 day'::interval
        ) AS date
),
cumulative AS (
    SELECT
        ds.date,
        COALESCE(SUM(dg.total_gas) OVER (ORDER BY ds.date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW), 0) AS cumulative_gas
    FROM
        date_series ds
    LEFT JOIN
        daily_gas dg ON ds.date = dg.date
)
SELECT
    date,
    cumulative_gas
FROM
    cumulative
-- WHERE
--     date BETWEEN '2024-08-03' AND '2024-08-05'
ORDER BY
    date;
