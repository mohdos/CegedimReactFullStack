package com.moabdelnaby.internapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.sql.Time;
import java.util.*;

@Service
@Transactional
public class ItemService {

    @PersistenceContext
    EntityManager entityManager;

    @Autowired
    private ItemsRepository itemsRepository;

    public List<Item> getItems(Integer offset, Integer limit)
    {
        String queryString = String.format("select * from items offset %d", offset);
        if (limit > 0)
        {
            queryString = queryString + " limit " + limit;
        }
        Query query = entityManager.createNativeQuery(queryString);
        List<Object> result = query.getResultList();

        Iterator iterator = result.iterator();

        List<Item> items = new ArrayList<>();

        while (iterator.hasNext()) {
            Object[] row = (Object[]) iterator.next();
            System.out.println(Arrays.toString(row));
            Item item = new Item();

            item.setName(row[1].toString());
            item.setId(Integer.parseInt(row[0].toString()));

            items.add(item);
        }

        return items;
    }

    public Item getItem(Integer id)
    {
        return itemsRepository.findById(id).orElse(null);
    }

}
