import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import BillDashboardItem from './BillDashboardItem';
import { Bill } from '../models/Bill';

describe("BillDashboardItem", () => {

    beforeEach(() => {
        const bill : Bill = {
          id: "bill123",
          customerCode: "C123",
          customerName: "John Doe",
          customerAddress: "123 Main Street",
          installationCode: "IC456",
          reference: "Ref789",
          dueDate: "2023-02-01",
          total: 200.0,
          accessKey: "key987",
          fileName: "invoice.pdf",
          createAt: "2023-01-01",
          updateAt: "2023-01-03",
          items: [
            {
              id: "item1",
              billId: "bill123",
              description: "Product A",
              unit: "pcs",
              quantity: 5,
              total: 50.0,
              createAt: "2023-01-01",
              updateAt: "2023-01-02",
            }
          ]
        }
        render(
          <BrowserRouter>
            <BillDashboardItem bill={bill} />
          </BrowserRouter>
        );
    });

    test("should show title all the time", () => {
        expect(screen.getAllByText(/John Doe/i)).toBeDefined()
    })
})