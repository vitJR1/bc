select *
from test_txs
WHERE block_height IN (
    select DISTINCT block_height
    from test_txs
    limit 10
)
order by block_height DESC
